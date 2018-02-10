const dummyData = [

    {

        user: "Caleb Hicks",
        shortBio: "React Developer, JavaScript Enthusiast",
        thumbnailUrl: 'https://lambdaschool.com/assets/img/caleb.jpg',
        post: 'https://i.kinja-img.com/gawker-media/image/upload/s--PBiIQDFv--/c_scale,f_auto,fl_progressive,q_80,w_800/18ix9nla9mydfjpg.jpg',
        postType: 'IMAGE',
        likes: 13,
        comments: [
            {
                user: "Ivan Mora",
                thumbnailUrl: 'https://lambdaschool.com/assets/img/ivan.jpg',
                text: "Congratulations on your new job"
            },
            {
                user: "Sean Chen",
                thumbnailUrl: 'https://lambdaschool.com/assets/img/sean.jpg',
                text: "Very well deserved!"
            }
        ]

    }, {

        user: "Usain Bolt",
        shortBio: "Fastest man on the earth",
        thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Usain_Bolt_portrait.jpg',
        post: 'Just broke my own record (again) in 100m. Can\'t get any better!',
        postType: 'TEXT',
        likes: 2400,
        activity: {
            user: 'Barry Allen',
            type: 'COMMENT'
        },
        comments: [
            {
                user: "Bruce Wayne",
                thumbnailUrl: 'https://rondargombes.files.wordpress.com/2010/06/bw2.jpg',
                text: "Whoa! Congratulations!"
            },
            {
                user: "Barry Allen",
                thumbnailUrl: 'https://lh5.googleusercontent.com/-Q0Uyq7la_xM/VFI7Tr1cnpI/AAAAAAAABBc/IYanVZ5O2BQ/w640-h639/10624787_733238110101828_1590463013605304597_n.jpg',
                text: "Still can't beat me, can you?"
            },
            {
                user: "Aaron Gallant",
                thumbnailUrl: 'https://lambdaschool.com/assets/img/aaron.png',
                text: "That's amazing!"
            }
        ]

    }

];


export default dummyData;