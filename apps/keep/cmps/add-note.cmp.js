import { noteService } from '../note-service.js';

<template>
    <div class="new-note-creator">
        <label>Priority <br>
            <select class="priority" v-model="note.priorityLevel">
                <option disabled value="">Choose note priority</option>
                <option value="-1">Low</option>
                <option value="0">Normal</option>
                <option value="1">High</option>
            </select>
        </label>

        <label>Note Title
            <input v-model="note.title" type="text" maxlength="30">
        </label>

        <label> Note Description
            <textarea v-model="note.description" maxlength="50"></textarea>
        </label>

        {/* <button class="btn btnPrimary" @click="addNewNote">Create New Note</button> */}



    export default {
        name: "NewNoteCreator",
        props: {
            note: {
                type: Object,
                required: true
            }
        },
        methods: {
            addNewNote() {
                this.$emit('addNote', this.note)
            }
        }
    }



