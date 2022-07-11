BACKEND_PATH = 'http://127.0.0.1:8000/api/notes/'

new Vue({
    el: '#notes',
    delimiters: ['[[', ']]'],
    data: {
        notes: [],
        loading: false,
        current_note: {},
        new_note: {'title': null, 'content': null}
    },
    mounted: function () {
        this.getNotes();
    },
    methods: {
        getNotes: function () {
            this.loading = true;
            this.$http.get(BACKEND_PATH)
                .then((response) => {
                    this.notes = response.data;
                    this.loading = false;
                })
                .catch((err) => {
                    this.loading = false;
                    console.log(err);
                })
        },
        addNote: function () {
            this.loading = true;
            this.$http.post(BACKEND_PATH, this.new_note)
                .then((response) => {
                    this.loading = false;
                    this.getNotes();
                })
                .catch((err) => {
                    this.loading = false;
                    console.log(err);
                })
        },
        deleteNote: function (note_id) {
            this.loading = true;
            this.$http.delete(`${BACKEND_PATH + note_id}`)
                .then((response) => {
                    this.loading = false;
                    this.getNotes();
                })
                .catch((err) => {
                    this.loading = false;
                    console.log(err);
                })
        },
        getNoteEditUrl: function (id) {
            return `notes/${id}/update`
        }
    }
});