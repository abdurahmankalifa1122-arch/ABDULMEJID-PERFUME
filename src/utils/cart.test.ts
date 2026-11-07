import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateCartSubtotal,
  calculateTotalCount,
  formatETB,
  generateWhatsAppOrderMessage,
  generateWhatsAppUrl,
  type CartItem,
} from './cart';

test('calculateCartSubtotal calculates correctly with multiple items', () => {
  const items: CartItem[] = [
    {
      product: { id: '1', name: 'Diamond Collection', brand: 'Diamond Collection', priceETB: 4500, size: '100ml' },
      quantity: 2,
    },
    {
      product: { id: '2', name: 'Lead Storm', brand: 'Assaf', priceETB: 5200, size: '100ml' },
      quantity: 1,
    },
  ];
  assert.equal(calculateCartSubtotal(items), 14200);
});

test('calculateCartSubtotal handles empty or invalid values safely', () => {
  assert.equal(calculateCartSubtotal([]), 0);
  assert.equal(calculateCartSubtotal(null as unknown as CartItem[]), 0);
});

test('calculateTotalCount sums item quantities correctly', () => {
  const items: CartItem[] = [
    { product: { id: '1', name: 'A', brand: 'B', priceETB: 100, size: '50ml' }, quantity: 3 },
    { product: { id: '2', name: 'C', brand: 'D', priceETB: 200, size: '100ml' }, quantity: 4 },
  ];
  assert.equal(calculateTotalCount(items), 7);
});

test('formatETB formats currency with ETB suffix and thousands comma', () => {
  assert.equal(formatETB(4500), '4,500 ETB');
  assert.equal(formatETB(0), '0 ETB');
});

test('generateWhatsAppOrderMessage formats message containing customer and item details', () => {
  const items: CartItem[] = [
    {
      product: { id: '1', name: 'Diamond Collection', brand: 'Diamond Collection', priceETB: 4500, size: '100ml' },
      quantity: 1,
    },
  ];
  const msg = generateWhatsAppOrderMessage({
    customerName: 'Abebe Bikila',
    customerLocation: 'Bole, Addis Ababa',
    customerPhone: '0911223344',
    items,
  });

  assert.ok(msg.includes('ABDULMEJID PERFUME'));
  assert.ok(msg.includes('Abebe Bikila'));
  assert.ok(msg.includes('Bole, Addis Ababa'));
  assert.ok(msg.includes('Diamond Collection'));
  assert.ok(msg.includes('4,500 ETB'));
  assert.ok(msg.includes('Merkato, Addis Ababa'));
});

test('generateWhatsAppUrl creates direct wa.me link with clean phone digits', () => {
  const url = generateWhatsAppUrl('+251921637548', 'Hello ABDULMEJID');
  assert.ok(url.startsWith('https://wa.me/251921637548?text=Hello%20ABDULMEJID'));
});
