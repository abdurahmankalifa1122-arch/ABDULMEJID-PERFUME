export interface CartProduct {
  id: string;
  name: string;
  brand: string;
  priceETB: number;
  size: string;
  image?: string;
  bottleSize?: string;
}

export interface CartItem {
  product: CartProduct;
  quantity: number;
}

export interface WhatsAppOrderDetails {
  customerName: string;
  customerLocation: string;
  customerPhone?: string;
  notes?: string;
  items: CartItem[];
}

/**
 * Calculates total ETB sum of items in cart
 */
export function calculateCartSubtotal(items: CartItem[]): number {
  if (!items || !Array.isArray(items)) return 0;
  return items.reduce((sum, item) => {
    const qty = Math.max(0, item.quantity || 0);
    const price = Math.max(0, item.product?.priceETB || 0);
    return sum + qty * price;
  }, 0);
}

/**
 * Calculates total item count in cart
 */
export function calculateTotalCount(items: CartItem[]): number {
  if (!items || !Array.isArray(items)) return 0;
  return items.reduce((sum, item) => sum + Math.max(0, item.quantity || 0), 0);
}

/**
 * Formats Ethiopian Birr (ETB) with commas
 */
export function formatETB(amount: number): string {
  if (isNaN(amount) || amount === null || amount === undefined) return '0 ETB';
  return `${amount.toLocaleString('en-US')} ETB`;
}

/**
 * Generates structured, polite WhatsApp order text for ABDULMEJID PERFUME
 */
export function generateWhatsAppOrderMessage(details: WhatsAppOrderDetails): string {
  const { customerName, customerLocation, customerPhone, notes, items } = details;
  const subtotal = calculateCartSubtotal(items);

  const lines: string[] = [
    `*✨ NEW ORDER INQUIRY — ABDULMEJID PERFUME ✨*`,
    `_Merkato, Addis Ababa, Ethiopia_`,
    ``,
    `*Customer Details:*`,
    `• *Name:* ${customerName.trim() || 'Valued Customer'}`,
    `• *Delivery / Pickup Location:* ${customerLocation.trim() || 'Addis Ababa'}`,
  ];

  if (customerPhone && customerPhone.trim()) {
    lines.push(`• *Phone:* ${customerPhone.trim()}`);
  }

  lines.push(``, `*Selected Fragrances:*`);

  if (!items || items.length === 0) {
    lines.push(`• (No items selected)`);
  } else {
    items.forEach((item, index) => {
      const p = item.product;
      const itemTotal = (p.priceETB || 0) * item.quantity;
      lines.push(
        `${index + 1}. *${p.name}* (${p.brand})`,
        `   Size: ${p.size} | Qty: ${item.quantity} | ${formatETB(p.priceETB)} each = *${formatETB(itemTotal)}*`
      );
    });
  }

  lines.push(
    ``,
    `*Order Subtotal:* ${formatETB(subtotal)}`,
    ``,
    `_Note: Price and batch availability to be verified with ABDULMEJID PERFUME sales team._`
  );

  if (notes && notes.trim()) {
    lines.push(``, `*Special Instructions:*`, `"${notes.trim()}"`);
  }

  lines.push(
    ``,
    `Hello ABDULMEJID PERFUME team! I would like to place this fragrance order. Please confirm availability and delivery details.`
  );

  return lines.join('\n');
}

/**
 * Encodes text and returns direct wa.me link
 */
export function generateWhatsAppUrl(phone: string, message: string): string {
  const sanitizedPhone = phone.replace(/[^0-9]/g, '');
  return `https://wa.me/${sanitizedPhone}?text=${encodeURIComponent(message)}`;
}
