const Intern = require('../lib/Intern')
describe('Intern', () => {
    describe("test properties of intern", () => {
        it("test all properties", () => {
            const intern = new Intern('Josh', 1, 'josh.rinehart.2k@gmail.com', 'The Ohio State University')
    
            expect(intern.name).toEqual('Josh')
            expect(intern.id).toEqual(1)
            expect(intern.email).toEqual('josh.rinehart.2k@gmail.com')
            expect(intern.school).toEqual('The Ohio State University')
        })
    })
    
    describe("test all methods of intern", () => {
        it("test all methods", () => {
            const intern = new Intern('Josh', 1, 'josh.rinehart.2k@gmail.com', 'The Ohio State University')

            expect(intern.getName()).toEqual('Josh')
            expect(intern.getId()).toEqual(1)
            expect(intern.getEmail()).toEqual('josh.rinehart.2k@gmail.com')
            expect(intern.getRole()).toEqual('Intern')
        })
    })
})