all: development

clean:
	rm -rf _site

development: clean
	bundle exec jekyll serve --drafts --config '_config.yml,_config-dev.yml'

images:
	imageoptim --image-alpha -d img/
