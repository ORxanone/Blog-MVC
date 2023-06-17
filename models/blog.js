const blogs = [
    {
        title: 'Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies',
        categories: ['category'],
        date: 'July 19, 2020',
        info: '4 min read',
    },
    {
        title: 'Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer',
        categories: ['category1', 'category2'],
        date: 'July 30, 2020',
        info: '5 min read',
    },
];


class Blog{
    getAll(){
        return blogs;
    }
}



module.exports.getAll = function(){
    return blogs;
};

module.exports.addBlog = function(blog){
    blogs.push(blog);
};

