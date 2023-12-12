const { createApp } = Vue;

createApp({

    data() {
        return {
            
            quest: "",
            
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]
        }
    },
    methods: {

        addQuest(){
            this.todos.unshift(this.quest);
            this.quest = ""
        },

        removeQuest(element) {
            this.todos.splice(element, 1)
        }

    }

}).mount('.container')

