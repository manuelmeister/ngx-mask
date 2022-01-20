// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const typeTest = (inputValue: string, fixture: any) => {
  fixture.detectChanges();

  fixture.nativeElement.querySelector('input').value = inputValue;

  fixture.nativeElement.querySelector('input').dispatchEvent(new Event('input'));

  fixture.detectChanges();
  return fixture.nativeElement.querySelector('input').value;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const equal = (value: string, expectedValue: string, fixture: any, async = false) => {
  typeTest(value, fixture);

  if (async) {
    Promise.resolve().then(() => {
      expect(fixture.nativeElement.querySelector('input').value).toBe(expectedValue);
    });
    return;
  }
  expect(fixture.nativeElement.querySelector('input').value).toBe(expectedValue);
};
