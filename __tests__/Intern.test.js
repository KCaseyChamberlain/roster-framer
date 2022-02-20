const Intern = require('../lib/Intern.js');

test('test get intern school', () => {
    const expectedSchool = 'internSchool';
    const intern = new Intern('James', '2246', 'test@email.com', expectedSchool);

    var actualSchool = intern.getSchool();
    expect(actualSchool).toEqual(expectedSchool);
});