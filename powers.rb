require 'find'
require 'nokogiri'
require 'open-uri'
p = ""
id = 0;
Find.find('./') do |f|
  if File.file?(f) && f =~ /powers-power/
    p << "{'id': '#{id.to_s}',"
    id=id+1
    dis = false
    doc = Nokogiri::HTML(open(f)) 
    doc.css('d1 font > *').each do |n|
      c = n.content.gsub(/"/,'&quot;').gsub(/\n/,'<br>')
      if n.to_s.match(/<h1>/)
        p << "'name': \"#{c}\", "
      end
      if n.to_s.match(/<dt>/) && !n.to_s.match(/<h1>/)
        p << "'#{c[0..-2]}': "
      end
      if n.to_s.match(/<dd>/)
        p << "\"#{c}\", "
      end
      if dis
        arr = c.split
        p << "'class': \"#{arr[0]}\", 'level': \"#{arr[-1]}\", "
        dis = false
      end
      if n.to_s.match(/<dt><b>Display/)
        dis = true
      end
    end
    p = p[0..-3]
    p << "},"
    # puts p
  end  
  File.open('powers.js', 'w') do |o|
    o.puts 'powers = ['
    o.puts p
    o.puts ']'
  end
end
