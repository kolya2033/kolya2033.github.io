
class Services {
    getResource = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        return await res.json()
    }
}
export default Services