import { Controller } from "@hotwired/stimulus"
import { createConsumer } from '@rails/actioncable'

// Connects to data-controller="chatroom-subscription"
export default class extends Controller {
  static targets = ['messages']

  connect() {
    // console.log('NOW YOU NEED TO SUBSCRIBE THIS USER')
    // createConsumer().subscriptions.create(CHANNEL)
    // console.log(this.element.dataset.chatroomId);
    const chatroomId = this.element.dataset.chatroomId
    this.channel = createConsumer().subscriptions.create(
      { channel: 'ChatroomChannel', id: chatroomId },
      { received: (data) => {
      // console.log(data)
      this.messagesTarget.insertAdjacentHTML('beforeend', data)
      this.messagesTarget.scrollTo(0, this.messagesTarget.scrollHeight)
      }}
    )
  }

  disconnect() {
    this.channel.unsubscribe()
  }

  resetForm(event) {
    event.target.reset()
  }
}
