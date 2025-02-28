import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Base64Tool from '../components/Base64Tool.vue';

describe('Base64Tool.vue', () => {
  it('encodes text to Base64', async () => {
    const wrapper = mount(Base64Tool);
    const input = wrapper.find('textarea');
    await input.setValue('Hello, World!');
    const encodeButton = wrapper.find('button[aria-label="Encode text"]');
    await encodeButton.trigger('click');
    const output = wrapper.find('textarea[aria-label="Output text"]');
    expect((output.element as HTMLTextAreaElement).value).toBe(
      'SGVsbG8sIFdvcmxkIQ=='
    );
  });

  it('decodes Base64 to text', async () => {
    const wrapper = mount(Base64Tool);
    const input = wrapper.find('textarea');
    await input.setValue('SGVsbG8sIFdvcmxkIQ==');
    const decodeButton = wrapper.find('button[aria-label="Decode text"]');
    await decodeButton.trigger('click');
    const output = wrapper.find('textarea[aria-label="Output text"]');
    expect((output.element as HTMLTextAreaElement).value).toBe('Hello, World!');
  });

  it('clears input and output', async () => {
    const wrapper = mount(Base64Tool);
    const input = wrapper.find('textarea');
    await input.setValue('Some text');
    const clearButton = wrapper.find('button[aria-label="Clear text"]');
    await clearButton.trigger('click');
    expect((input.element as HTMLTextAreaElement).value).toBe('');
    const output = wrapper.find('textarea[aria-label="Output text"]');
    expect((output.element as HTMLTextAreaElement).value).toBe('');
  });

  it('displays error on invalid Base64 decode', async () => {
    const wrapper = mount(Base64Tool);
    const input = wrapper.find('textarea');
    await input.setValue('Invalid Base64');
    const decodeButton = wrapper.find('button[aria-label="Decode text"]');
    await decodeButton.trigger('click');
    const error = wrapper.find('p.text-red-500');
    expect(error.text()).toBe('Invalid Base64 string');
  });
});
