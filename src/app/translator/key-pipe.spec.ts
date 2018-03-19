import {KeyPipe} from './key-pipe';

describe('Pipe: Default', () => {
  let pipe: KeyPipe;

  beforeEach(() => {
    pipe = new KeyPipe();
  });

  const tmp = {rt: 'www'};

  it('transforms object to array with objects', () => {
    expect(pipe.transform(tmp)).toBe({'key': 'rt', 'value': 'www'});
  });

});
