all: development

clean:
	rm -rf _site

development: clean
	bundle exec jekyll serve --config _config.yml _config-dev.yml

deploy: clean
	bundle exec jekyll build --config _config.yml
	git push origin master
