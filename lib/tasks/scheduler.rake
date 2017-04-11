require 'http'

desc "This task is called by the Heroku scheduler add-on"
task :ping => :environment do
  puts "Pinging..."
  HTTP.get('http://liftables.herokuapp.com')
  puts "done."
end
