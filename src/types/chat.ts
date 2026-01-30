export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  html?: string;
  timestamp: Date;
}

export interface CustomerData {
  name: string;
  email: string;
  phone?: string;
}

export interface SlotInfo {
  display: string;
  url: string;
  slot_index: number;
  start: string;
  end: string;
}

export interface ApiResponse {
  meta: {
    trace_id: string;
    status: 'ok' | 'error';
  };
  channel: string;
  payload: {
    text: string;
    html: string;
    slots?: SlotInfo[];
    shuffle_url?: string;
    expires_at?: string;
  };
}

export interface ChatbotState {
  isOpen: boolean;
  messages: ChatMessage[];
  customer: CustomerData | null;
  isLoading: boolean;
  showCustomerForm: boolean;
  pendingMessage: string | null;
}
