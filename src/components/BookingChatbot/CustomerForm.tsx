import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X, User, Mail, Phone } from 'lucide-react';
import type { CustomerData } from '@/types/chat';

interface CustomerFormProps {
  onSubmit: (data: CustomerData) => void;
  onClose: () => void;
}

const CustomerForm = ({ onSubmit, onClose }: CustomerFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validate = (): boolean => {
    const newErrors: { name?: string; email?: string } = {};
    
    if (!name.trim()) {
      newErrors.name = 'Bitte geben Sie Ihren Namen ein';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Bitte geben Sie Ihre E-Mail ein';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail ein';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      onSubmit({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim() || undefined,
      });
    }
  };

  return (
    <div className="absolute inset-0 bg-background/95 backdrop-blur-sm z-10 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h3 className="font-semibold text-foreground">Kontaktdaten</h3>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-muted rounded-full transition-colors"
          aria-label="Schließen"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="flex-1 p-4 space-y-4 overflow-auto">
        <p className="text-sm text-muted-foreground mb-4">
          Damit wir Ihren Termin einrichten können, benötigen wir noch kurz Ihre Kontaktdaten.
        </p>

        <div className="space-y-2">
          <Label htmlFor="name" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Name *
          </Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Max Mustermann"
            className={errors.name ? 'border-destructive' : ''}
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            E-Mail *
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="max@beispiel.de"
            className={errors.email ? 'border-destructive' : ''}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Telefon (optional)
          </Label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+49 123 456789"
          />
        </div>

        <div className="pt-2">
          <p className="text-xs text-muted-foreground mb-4">
            Mit dem Absenden stimmen Sie unserer{' '}
            <a 
              href="/datenschutz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary underline hover:no-underline"
            >
              Datenschutzerklärung
            </a>{' '}
            zu. Ihre Daten werden nur zur Terminverarbeitung verwendet.
          </p>
          
          <Button type="submit" className="w-full">
            Weiter zur Terminbuchung
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;
