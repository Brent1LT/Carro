# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# Change Jbuilder keys into camel-case
Jbuilder.key_format camelize: :lower

