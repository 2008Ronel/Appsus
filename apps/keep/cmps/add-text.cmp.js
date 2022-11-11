// export default {
//   props: ['keep'],
//   template: `
// <section>

// <form>
// <input v-model="keep.info.title" :type="search" placeholder="title.."/>
// <input v-model="keep.info.txt" :type="search" placeholder="text..."/>
// <button>submit</button>

// </form>

// </section>
// `,
//   data() {
//     return {
//       note: {
//         id: '',
//         type: 'note-txt',
//         info: {
//           title: '',
//           txt: '',
//         },
//       },
//     };
//   },
//   created() {},

//   methods: {
//     addNote() {
//       const note = JSON.parse(JSON.stringify(this.note));
//       this.$emit('addNote', note);
//       this.note = {
//         id: '',
//         type: 'note-txt',
//         isPinned: false,
//         info: {
//           title: '',
//           txt: '',
//         },
//       };
//     },
//   },
//   changeNoteType(ev) {
//     this.noteToEdit.type = 'note-img';
//     // this.noteToEdit.info.url =
//   },
// };
