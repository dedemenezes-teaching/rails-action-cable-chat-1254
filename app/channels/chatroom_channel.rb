class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    # binding.break
    # params => channel: 'ChatroomChannel, id: '1'
    chatroom = Chatroom.find(params[:id])
    # stream_from "chatroom_#{params[:id]}"
    stream_for chatroom
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
