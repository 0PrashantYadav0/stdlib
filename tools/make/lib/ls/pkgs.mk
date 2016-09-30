
# VARIABLES #

# Determine the host kernel:
KERNEL ?= $(shell uname -s)

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.

ifeq ($(KERNEL), Darwin)
	find_kernel_prefix := -E
else
	find_kernel_prefix :=
endif

# Define a package filename identifier:
PACKAGES_FILE ?= package.json

# Define the command flags:
FIND_PACKAGES_FLAGS ?= \
	-name "$(PACKAGES_FILE)" \
	-regex "$(PACKAGES_FILTER)" \
	-not -path "$(NODE_MODULES)/*" \
	-not -path "$(BUILD_DIR)/*" \
	-not -path "$(REPORTS_DIR)/*" \
	-exec dirname {} \;

ifneq ($(KERNEL), Darwin)
	FIND_PACKAGES_FLAGS := -regextype posix-extended $(FIND_PACKAGES_FLAGS)
endif

# Define the list of packages:
PACKAGES ?= $(shell find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_PACKAGES_FLAGS))


# TARGETS #

# List all packages.
#
# This target prints a list of all packages, excluding the `node_modules`, `build`, and `reports` directories.

list-pkgs:
	$(QUIET) find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_PACKAGES_FLAGS) | xargs printf '%s\n'

.PHONY: list-pkgs
