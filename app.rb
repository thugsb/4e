require 'net/http'
require 'bundler'
Bundler.require :default



get '/' do
  @sections = [
    {id: 'Races', files: ['06-races']}, 
    {id: 'Feats', files: ['09-feats']}, 
    {id: 'Items', files: ['03-base-items','04-new-items','40-gear']},
    {id: 'Cleric',files: ['10-cleric'], json: 'json_10_cleric'},
    {id: 'Fighter',files: ['11-fighter'], json: 'json_11_fighter'},
    # {id: 'Paladin',files: ['12-paladin'], json: 'json_12_paladin'},
    {id: 'Ranger',files: ['13-ranger'], json: 'json_13_ranger'},
    {id: 'Rogue',files: ['14-rogue'], json: 'json_14_rogue'},
    # {id: 'Warlock',files: ['15-warlock'], json: 'json_15_warlock'},
    {id: 'Warlord',files: ['16-warlord'], json: 'json_16_warlord'},
    {id: 'Wizard',files: ['17-wizard'], json: 'json_17_wizard'},
    # {id: 'Avenger',files: ['18-avenger'], json: 'json_18_avenger'},
    # {id: 'Barbarian',files: ['19-barbarian'], json: 'json_19_barbarian'},
    {id: 'Bard',files: ['20-bard'], json: 'json_20_bard'},
    # {id: 'Druid',files: ['21-druid'], json: 'json_21_druid'},
    {id: 'Invoker',files: ['22-invoker'], json: 'json_22_invoker'},
    {id: 'Shaman',files: ['23-shaman'], json: 'json_23_shaman'},
    {id: 'Sorcerer',files: ['24-sorcerer'], json: 'json_24_sorcerer'},
    {id: 'Warden',files: ['25-warden'], json: 'json_25_warden'},
    # {id: 'Ardent',files: ['26-ardent'], json: 'json_26_ardent'},
    {id: 'Battlemind',files: ['27-battlemind'], json: 'json_27_battlemind'},
    {id: 'Monk',files: ['28-monk'], json: 'json_28_monk'},
    {id: 'Psion',files: ['29-psion'], json: 'json_29_psion'},
    {id: 'Runepriest',files: ['30-runepriest'], json: 'json_30_runepriest'},
    {id: 'Seeker',files: ['31-seeker'], json: 'json_31_seeker'},
    {id: 'Artificer',files: ['32-artificer'], json: 'json_32_artificer'},
    # {id: 'Assassin',files: ['33-assassin'], json: 'json_33_assassin'},
    {id: 'Swordmage',files: ['34-swordmage'], json: 'json_34_swordmage'}
    # {id: 'Vampire',files: ['35-vampire'], json: 'json_35_vampire'}
  ]
  
  haml :display
end

get '/update' do
  haml :update
end
