Rails.application.routes.draw do
  root to: 'frenchs#resume'

  get 'english', to: 'englishs#resume'
end
