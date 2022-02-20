const Engineer = require('../lib/Engineer.js');

test('test create employee object', () => {
    const engineer = new Engineer('Dave');

    expect(typeof (engineer)).toBe('object')
});

test('test get engineer Github', () => {
    const expectedGithub = 'GitHubUser';
    const engineer = new Engineer('Dave', '3211', 'test@test.com', expectedGithub);

    var actualGithub = engineer.getGithub();
    expect(actualGithub).toEqual(expectedGithub);
});