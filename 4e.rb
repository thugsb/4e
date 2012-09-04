require 'sinatra'
require 'net/http'
require 'json'
require 'rubygems'
require 'cobravsmongoose'
require 'haml'
require 'coffee-script'



get '/' do
  haml :display
end

get '/update' do
  haml :update
end
