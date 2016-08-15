# Sometimes it's a README fix, or something like that - which isn't relevant for
# including in a project's CHANGELOG for example
declared_trivial = github.pr_title.include? "#trivial"

# Make it more obvious that a PR is a work in progress and shouldn't be merged yet
warn("PR is classed as Work in Progress") if github.pr_title.include? "[WIP]"
warn("PR is classed as Draft") if github.pr_title.include? "[Draft]"

# Warn when there is a big PR
warn("Big PR") if git.lines_of_code > 500

prose.disable_linters = ["misc.scare_quotes", "misc.tense_present"]
prose.lint_files "_posts/*.md"
prose.check_spelling "_posts/*.md"
