export const PATH_KEYS = {
    root: '/',
    home() {
        return this.root;
    },
    login() {
        return this.root.concat('login');
    },
    register() {
        return this.root.concat('register');
    },
    profile() {
        return this.root.concat('profile');
    },
    menu() {
        return this.root.concat('menu');
    },
};
