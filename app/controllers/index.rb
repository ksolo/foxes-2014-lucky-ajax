get '/' do
  erb :index
end


# TODO: convert this route to use AJAX
post '/rolls' do
  # If the user passes-in a "value", let's use it. Otherwise, we'll generate a random one.
  # See: roll_if_value_is_nil method in the Roll model.

  # Let's take a look at what was sent by the request
  puts params.inspect

  value = params[:value] ? params[:value].to_i : nil

  @roll = value ? Roll.create({ value: value }) : Roll.create

  # if the request is an AJAX request, only respond with the _die_image partial
  if request.xhr?
    # layout false tells sinatra not to render this template inside the layout.erb
    erb :_die_image, layout: false
  else
    erb :index
  end
end
