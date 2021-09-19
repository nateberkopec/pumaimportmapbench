require "rack"
require "localhost/authority"

class BeSlow
  BE_SLOW_FOR_MS = 60

  def initialize(app, options = {})
    @app = app
  end

  def call(env)
    time_to_go = Time.now + BE_SLOW_FOR_MS / 1000.0
    while Time.now < time_to_go
    end
    @app.call(env)
  end
end

use BeSlow
use Rack::Static, :urls => ["/js"]
APP = Proc.new { |env| [200, {}, ["Hello World!"]]}
run APP