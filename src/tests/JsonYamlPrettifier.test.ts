import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import JsonYamlPrettifier from '../components/JsonYamlPrettifier.vue';

describe('JsonYamlPrettifier.vue', () => {
  it('prettifies JSON', async () => {
    const wrapper = mount(JsonYamlPrettifier);
    const input = wrapper.find('textarea[aria-label="Input text"]');
    await input.setValue('{"name":"John Wick","age":30}');
    const prettifyButton = wrapper.find('button[aria-label="Prettify JSON"]');
    await prettifyButton.trigger('click');
    const output = wrapper.find('textarea[aria-label="Output text"]');
    expect((output.element as HTMLTextAreaElement).value).toBe(
      '{\n  "name": "John Wick",\n  "age": 30\n}'
    );
  });

  it('prettifies YAML', async () => {
    const wrapper = mount(JsonYamlPrettifier);
    const input = wrapper.find('textarea[aria-label="Input text"]');
    await input.setValue('name: John Wick\nage: 30');
    const prettifyButton = wrapper.find('button[aria-label="Prettify YAML"]');
    await prettifyButton.trigger('click');
    const output = wrapper.find('textarea[aria-label="Output text"]');
    expect((output.element as HTMLTextAreaElement).value).toBe(
      'name: John Wick\nage: 30\n'
    );
  });

  it('displays error on invalid JSON', async () => {
    const wrapper = mount(JsonYamlPrettifier);
    const input = wrapper.find('textarea[aria-label="Input text"]');
    await input.setValue('Invalid JSON');
    const prettifyButton = wrapper.find('button[aria-label="Prettify JSON"]');
    await prettifyButton.trigger('click');
    const error = wrapper.find('p[aria-label="Error message"]');
    expect(error.text()).toBe('Invalid JSON');
  });

  it('displays error on invalid YAML', async () => {
    const wrapper = mount(JsonYamlPrettifier);
    const input = wrapper.find('textarea[aria-label="Input text"]');
    await input.setValue('Invalid YAML:\ntest');
    const prettifyButton = wrapper.find('button[aria-label="Prettify YAML"]');
    await prettifyButton.trigger('click');
    const error = wrapper.find('p[aria-label="Error message"]');
    expect(error.text()).toBe('Invalid YAML');
  });
});
