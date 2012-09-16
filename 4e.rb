require 'bundler'
Bundler.require :default



get '/' do
  haml :display
end

get '/update' do
  haml :update
end
