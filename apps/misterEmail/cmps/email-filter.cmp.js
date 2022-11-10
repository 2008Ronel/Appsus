export default {
  template: `
          <input type="search" placeholder="Search inbox" class="email-search"/>
          <button class="composeBtn flex-box">Compose <img src='../Appsus/assets/img/email_compose_pen.png'/></button>
          
      <section>
      <button class="hamburger-btn">☰</button>
        <div class="email-all-filters flex-box">
          <button>All Mail</button>
          <button>Sent</button>
          <button>Starred</button>
          <button>Read Messages</button>
          <button>Unread Messages</button>
        </div>
      </section>
  `
  , created() {

  }
  , computed: {
  },
}