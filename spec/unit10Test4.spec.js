import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {  // 4
  it('should add a job to the person object', function() {
    person = myModule.addJob(person, 'Engineer');
    expect(person.job).toEqual('Engineer');
  });

});
