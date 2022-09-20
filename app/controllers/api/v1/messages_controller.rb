class Api::V1::MessagesController < ApplicationController
  def index
    @messages = {greeting: Greeting.all.sample.text}
    render json: @messages
  end
end
