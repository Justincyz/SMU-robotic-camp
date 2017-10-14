// This is the js for the default/index.html view.

var app = function () {

    var curr_edit = 0;
    var prevent_post = false;

    var self = {};

    self.add_post_button = function () {
            self.vue.is_adding_post = !self.vue.is_adding_post;
            self.vue.is_adding_first_name = !self.vue.is_adding_first_name;

    };

    self.add_post = function () {
        // The submit button to add a post has been added.
        $.post(add_post_url,
            {

                FirstName: self.vue.form_first_name,
                LastName: self.vue.form_last_name,
                birthday:self.vue.form_birthday,
                mailing:self.vue.form_mailing,
                email:self.vue.form_email,
                phone:self.vue.form_phone,
                school:self.vue.form_school,
                gpa:self.vue.form_gpa,
                emergency:self.vue.form_emergency,
                teacher:self.vue.form_teacher


            },
            function (data) {
                $.web2py.enableElement($("#add_post_submit"));
                self.vue.posts.unshift(data.post);
                enumerate(self.vue.posts);
                //make sure that no more than 4 posts are displayed
                //unless load more button is pressed
                if (self.vue.posts.length > 4) {
                    console.log("made it");
                    self.vue.posts.pop();
                    self.vue.has_more = true;
                }
            });

        console.log(self.vue.form_first_name);
        self.vue.is_adding_post = !self.vue.is_adding_post;

        self.vue.form_first_name = "";
        self.vue.form_last_name = "";
        self.vue.form_birthday="";
        self.vue.form_mailing = "";
        self.vue.form_email = "";
        self.vue.form_phone="";
        self.vue.form_school = "";
        self.vue.form_gpa = "";
        self.vue.form_emergency="";
        self.vue.form_teacher="";

    };

    function get_posts_url(start_idx, end_idx) {
        var pp = {
            start_idx: start_idx,
            end_idx: end_idx
        };
        return posts_url + "?" + $.param(pp);
    }

    self.get_posts = function () {
        $.getJSON(get_posts_url(0, 4), function (data) {
            self.vue.posts = data.posts;
            self.vue.has_more = data.has_more;
            self.vue.logged_in = data.logged_in;
            enumerate(self.vue.posts);
        })
    };

    self.delete_post = function (post_idx) {
        $.post(del_post_url,
            {post_id: self.vue.posts[post_idx].id},
            function () {
                self.vue.posts.splice(post_idx, 1);
                enumerate(self.vue.posts);
            }
        )
    };


    self.vue = new Vue({
        el: "#vue-div",
        delimiters: ['${', '}'],
        unsafeDelimiters: ['!{', '}'],
        data: {
            is_adding_post: false,
            is_adding_first_name: false,
            posts: [],
            logged_in: false,
            has_more: false,
            form_last_name: "",
            form_first_name: "",
            form_birthday:"",
            form_mailing : "",
            form_email : "",
            form_phone :"",
            form_school : "",
            form_gpa : "",
            form_emergency:"",
            form_teacher:""
        },
        methods: {
            add_post_button: self.add_post_button,
            add_post: self.add_post,
            delete_post: self.delete_post
        }

    });

    self.get_posts();
    $("#vue-div").show();


    return self;
};

var APP = null;

// This will make everything accessible from the js console;
// for instance, self.x above would be accessible as APP.x
jQuery(function () {
    APP = app();
});
