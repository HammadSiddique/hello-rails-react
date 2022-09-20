class Api::V1::MessagesController < ApplicationController
    def index
        @messages = Greeting.all
        render json: @messages
    end
end