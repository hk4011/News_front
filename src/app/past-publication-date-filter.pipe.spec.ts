import { PastPublicationDateFilterPipe } from './past-publication-date-filter.pipe';

describe('PastPublicationDateFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new PastPublicationDateFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
