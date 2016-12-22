
# VARIABLES #

# Define the command for removing files and directories:
DELETE ?= -rm
DELETE_FLAGS ?= -rf

# Determine the host kernel:
KERNEL ?= $(shell uname -s)

# Based on the kernel, determine the `open` command:
ifeq ($(KERNEL), Darwin)
	OPEN ?= open
else
	OPEN ?= xdg-open
endif
# TODO: add Windows command

# Define the command for recursively creating directories (WARNING: portability issues on some systems!):
MKDIR_RECURSIVE ?= mkdir -p

# Define the path of the JSDoc executable:
JSDOC ?= $(BIN_DIR)/jsdoc

# Define the path to the JSDoc configuration file:
JSDOC_CONF ?= $(CONFIG_DIR)/jsdoc/.jsdoc.json

# Define the path to JSDoc type definitions:
JSDOC_TYPEDEF ?= $(TOOLS_DIR)/docs/jsdoc/typedefs/*.js

# Define the path to the JSDoc JSON template:
JSDOC_JSON_TEMPLATE ?= $(TOOLS_DIR)/docs/jsdoc/templates/json

# Define the output directory for JSDoc:
JSDOC_OUT ?= $(SRC_DOCS_DIR)/jsdoc

# Define the output directory for JSDoc JSON:
JSDOC_JSON_OUT ?= $(JSDOC_OUT)/json

# Define the output filepath for JSDoc JSON:
JSDOC_JSON ?= $(JSDOC_JSON_OUT)/jsdoc.json

# Define the path to the JSDoc HTML template:
JSDOC_HTML_TEMPLATE ?= $(TOOLS_DIR)/docs/jsdoc/templates/html

# Define the output directory for JSDoc HTML documentation:
JSDOC_HTML_OUT ?= $(JSDOC_OUT)/static

# Define the output filepath for HTML documentation:
JSDOC_HTML ?= $(JSDOC_HTML_OUT)/index.html

# Define command-line options to be used when invoking the JSDoc executable to generate HTML documentation:
JSDOC_HTML_FLAGS ?= \
	--template $(JSDOC_HTML_TEMPLATE) \
	--configure $(JSDOC_CONF) \
	--encoding utf8 \
	--destination $(JSDOC_HTML_OUT) \
	--verbose

# Define command-line options to be used when invoking the JSDoc executable to generate JSDoc JSON:
JSDOC_JSON_FLAGS ?= \
	--template $(JSDOC_JSON_TEMPLATE) \
	--configure $(JSDOC_CONF) \
	--encoding utf8 \
	--destination console


# TARGETS #

# Generate JSDoc HTML documentation.
#
# This target generates source HTML documentation from [JSDoc][1]-style comments using [JSDoc][1].
#
# To install JSDoc:
#     $ npm install jsdoc
#
# [1]: http://usejsdoc.org/

jsdoc-html: $(NODE_MODULES)
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(JSDOC_HTML_OUT)
	$(QUIET) $(MKDIR_RECURSIVE) $(JSDOC_HTML_OUT)
	$(QUIET) $(JSDOC) $(JSDOC_HTML_FLAGS) $(JSDOC_TYPEDEF) $(SOURCES)

.PHONY: jsdoc-html


# Generate JSDoc JSON.
#
# This target generates JSDoc JSON from [JSDoc][1]-style comments.
#
# To install JSDoc:
#     $ npm install jsdoc
#
# [1]: http://usejsdoc.org/

jsdoc-json: $(NODE_MODULES)
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(JSDOC_JSON)
	$(QUIET) $(MKDIR_RECURSIVE) $(JSDOC_JSON_OUT)
	$(QUIET) $(JSDOC) $(JSDOC_JSON_FLAGS) $(JSDOC_TYPEDEF) $(SOURCES) > $(JSDOC_JSON)

.PHONY: jsdoc-json


# View HTML documentation.
#
# This target opens JSDoc HTML documentation in a local web browser.

view-jsdoc-html:
	$(QUIET) $(OPEN) $(JSDOC_HTML)

.PHONY: view-jsdoc-html


# Remove a JSDoc output directory.
#
# This target cleans up a JSDoc output directory by removing it entirely.

clean-jsdoc:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(JSDOC_OUT)

.PHONY: clean-jsdoc


# Rebuild JSDoc HTML documentation.
#
# This target removes any current documentation and regenerates source HTML documentation from [JSDoc][1]-style comments.
#
# To install JSDoc:
#     $ npm install jsdoc
#
# [1]: http://usejsdoc.org/

rebuild-jsdoc-html:
	$(QUIET) $(MAKE) -f $(this_file) clean-jsdoc
	$(QUIET) $(MAKE) -f $(this_file) jsdoc-html

.PHONY: rebuild-jsdoc-html

