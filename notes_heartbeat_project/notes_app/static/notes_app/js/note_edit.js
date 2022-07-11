BASE_URL = 'http://127.0.0.1:8000/'
BACKEND_PATH = 'api/notes/'
LOCK_PATH = 'lock-note/'
const SIXTY_SECONDS_IN_MILLISECONDS = 60000;
new Vue({
    el: '#note_edit',
    delimiters: ['[[', ']]'],
    data: {
        current_note: note_obj,
        interval: null,
        message: false,
    },
    methods: {
        updateNote: function () {
            this.loading = true;
            this.$http.put(`${BASE_URL + BACKEND_PATH + this.current_note.id}/`, this.current_note)
                .then((response) => {
                    this.current_note = response.data;
                    this.message = true;
                })
                .catch((err) => {
                    this.message = false;
                    console.log(err);
                })
        },
        closeWindow: function () {
            window.close()
        },
        lockNoteHeartbeat: function () {
            this.$http.post(`${BASE_URL + BACKEND_PATH + LOCK_PATH + this.current_note.id}/`, this.current_note)
                .then((response) => {
                    console.log('locked');
                    console.log(response);
                })
        }
    },
    mounted: function () {
        this.lockNoteHeartbeat();
        this.interval = setInterval(function () {
            this.lockNoteHeartbeat();
        }.bind(this), SIXTY_SECONDS_IN_MILLISECONDS);
    },
    beforeDestroy: function () {
        clearInterval(this.interval);
    }
});