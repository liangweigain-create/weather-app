export  async function fetchData(baseUrl, params = {}) {
    
    try {
        //利用built-in API创建url对象
        const urlObj = new URL(baseUrl);
        //通过传入的params，安全的自动设置url对象的search属性,search setter需要字符串作为参数
        urlObj.search = new URLSearchParams(params).toString();

        console.log('fetching data from: ', urlObj.toString());

        const response = await fetch(urlObj);//fetch函数接受字符串url或是url对象，这里我们直接传入url对象也是可以的
        if (!response.ok) throw new Error(`HTTPS Error: ${response.status}`);

        return await response.json();

    } catch (error) {
        console.log('API Error: ', error);
        throw error;
    }
}