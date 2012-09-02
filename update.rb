require 'sinatra'
require 'net/http'
require 'json'
require 'rubygems'
require 'cobravsmongoose'


xml_links = ["00-sources" , "01-bug-fixes", "02-base"]#, "03-base-items", "04-new-items", "05-backgrounds", "06-races", "07-darksun", "08-themes", "09-feats", "10-cleric", "11-fighter", "12-paladin", "13-ranger", "14-rogue", "15-warlock", "16-warlord", "17-wizard", "18-avenger", "19-barbarian", "20-bard", "21-druid", "22-invoker", "23-shaman", "24-sorcerer", "25-warden", "26-ardent", "27-battlemind", "28-monk", "29-psion", "30-runepriest", "31-seeker", "32-artificer", "33-assassin", "34-swordmage", "35-vampire", "36-companion", "37-hybrid", "38-paragon-paths", "39-epic-destinies", "40-gear"]

get '/' do
  "Hi"
end

get '/update' do
  "<h1>Hi</h1>"
  xml_links.each do |part|
    xml = Net::HTTP.get 'cbloader.com', "/sorted/#{part}.part"
    json = CobraVsMongoose.xml_to_hash(xml).to_json
    File.open("./js/data/#{part}.js", 'w') do |o|
      o.puts "json_#{part.gsub('-','_')} = #{json}"
    end
    "#{part} updated"
  end
end