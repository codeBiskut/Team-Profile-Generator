const Engineer = require('../lib/Engineer')
describe('Engineer', () => {
    describe("test properties of engineer", () => {
        it("test all properties", () => {
            const engineer = new Engineer('Josh', 1, 'josh.rinehart.2k@gmail.com', 'codebiskut')
    
            expect(engineer.name).toEqual('Josh')
            expect(engineer.id).toEqual(1)
            expect(engineer.email).toEqual('josh.rinehart.2k@gmail.com')
            expect(engineer.github).toEqual('codebiskut')
        })
    })
    
    describe("test all methods of engineer", () => {
        it("test all methods", () => {
            const engineer = new Engineer('Josh', 1, 'josh.rinehart.2k@gmail.com', 'codebiskut')

            expect(engineer.getName()).toEqual('Josh')
            expect(engineer.getId()).toEqual(1)
            expect(engineer.getEmail()).toEqual('josh.rinehart.2k@gmail.com')
            expect(engineer.getRole()).toEqual('Engineer')
            expect(engineer.getGithub()).toEqual('codebiskut')
        })
    })
})