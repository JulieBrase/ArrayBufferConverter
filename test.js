import ArrayBufferConverter from './src/index';
import { getBuffer } from './src/getBuffer';

describe('ArrayBufferConverter', () => {
  let converter;
  let buffer;

  beforeEach(() => {
    converter = new ArrayBufferConverter();
    buffer = getBuffer();
  });

  test('load() should load an ArrayBuffer', () => {
    converter.load(buffer);
    expect(converter.buffer).toBe(buffer);
  });

  test('toString() should convert ArrayBuffer to string', () => {
    converter.load(buffer);
    const result = converter.toString();
    expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });

  test('toString() should throw an error if buffer is not loaded', () => {
    expect(() => converter.toString()).toThrow('Buffer not loaded');
  });
});
