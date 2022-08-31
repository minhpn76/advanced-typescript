export type Event =
  | {
      type: "LOG_IN";
      payload: {
        userId: string;
      };
    }
  | {
      type: "SIGN_UP";
    };

// incorrect
const setEventInCorrect = (eventType: Event["type"], payload: any) => {};

// correct

const setEventCorrect = <Type extends Event["type"]>(
  ...args: Extract<Event, {type: Type}> extends {payload: infer TPayload}
  ? [type: Type, payload: TPayload]
  : [type: Type]
) => {};


setEventCorrect('LOG_IN', {
  userId: "1"
});

// TEST

export type TEST = 'a' | 'b'

const test: Extract<TEST, 'a'> = 'a'
console.log('test', test)
