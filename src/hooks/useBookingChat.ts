import { useState, useEffect, useCallback } from 'react';
import type { ChatMessage, CustomerData, ApiResponse, ChatbotState } from '@/types/chat';

const STORAGE_KEY = 'aireichbar_chat_customer';

const BOOKING_API = {
  baseUrl: 'https://automation.aireichbar.de/webhook/421b345c-c590-46ed-8e5b-9ede14ec97f1/421b345c-c590-46ed-8e5b-9ede14ec97f1',
  tenant: 'demo_company',
  channel: 'web',
  apiKey: 'air_test_demo_company_secret_key_12345',
  inbound: '/demo_company/web/inbound',
};

const WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  content: '',
  html: `
    <div style="line-height: 1.6;">
      <p><strong>Willkommen beim aireichbar Demo-Assistenten!</strong> 👋</p>
      <p>Ich kann Ihnen zeigen, wie unsere KI-gestützte Terminbuchung funktioniert.</p>
      <p style="margin-top: 12px;">Probieren Sie es aus:</p>
      <ul style="margin: 8px 0; padding-left: 20px;">
        <li>„Ich möchte einen Termin buchen"</li>
        <li>„Wann habt ihr Zeit?"</li>
        <li>„Termin beim Friseur"</li>
      </ul>
    </div>
  `,
  timestamp: new Date(),
};

export function useBookingChat() {
  const [state, setState] = useState<ChatbotState>({
    isOpen: false,
    messages: [WELCOME_MESSAGE],
    customer: null,
    isLoading: false,
    showCustomerForm: false,
    pendingMessage: null,
  });

  // Load customer from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const customer = JSON.parse(stored) as CustomerData;
        setState(prev => ({ ...prev, customer }));
      }
    } catch {
      // Ignore parse errors
    }
  }, []);

  const saveCustomer = useCallback((customer: CustomerData) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customer));
    setState(prev => ({ ...prev, customer, showCustomerForm: false }));
  }, []);

  const toggleOpen = useCallback(() => {
    setState(prev => ({ ...prev, isOpen: !prev.isOpen }));
  }, []);

  const sendMessage = useCallback(async (message: string, customer: CustomerData): Promise<void> => {
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: message,
      timestamp: new Date(),
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
      pendingMessage: null,
    }));

    try {
      const response = await fetch(
        `${BOOKING_API.baseUrl}${BOOKING_API.inbound}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': BOOKING_API.apiKey,
          },
          body: JSON.stringify({
            text: message,
            customer_name: customer.name,
            customer_email: customer.email,
            customer_phone: customer.phone || '',
            consent: true,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Booking API Error');
      }

      const data: ApiResponse = await response.json();

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: data.payload.text,
        html: data.payload.html,
        timestamp: new Date(),
      };

      setState(prev => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
        isLoading: false,
      }));
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: 'Entschuldigung, es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.',
        timestamp: new Date(),
      };

      setState(prev => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
        isLoading: false,
      }));
    }
  }, []);

  const handleUserInput = useCallback(async (message: string) => {
    if (!message.trim()) return;

    if (!state.customer) {
      setState(prev => ({
        ...prev,
        showCustomerForm: true,
        pendingMessage: message,
      }));
      return;
    }

    await sendMessage(message, state.customer);
  }, [state.customer, sendMessage]);

  const handleCustomerSubmit = useCallback(async (customer: CustomerData) => {
    saveCustomer(customer);
    
    if (state.pendingMessage) {
      await sendMessage(state.pendingMessage, customer);
    }
  }, [saveCustomer, sendMessage, state.pendingMessage]);

  const closeCustomerForm = useCallback(() => {
    setState(prev => ({
      ...prev,
      showCustomerForm: false,
      pendingMessage: null,
    }));
  }, []);

  return {
    ...state,
    toggleOpen,
    handleUserInput,
    handleCustomerSubmit,
    closeCustomerForm,
  };
}
