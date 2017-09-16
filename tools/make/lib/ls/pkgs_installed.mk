
# VARIABLES #

# Define the path to the executable to list installed package dependencies:
LIST_INSTALLED_PACKAGES ?= $(TOOLS_PKGS_DIR)/pkgs/installed/bin/cli

# Define the command flags:
LIST_INSTALLED_PACKAGES_FLAGS ?=


# TARGETS #

# List installed package dependencies.
#
# This target prints a list of all installed package dependencies.

list-pkgs-installed: $(NODE_MODULES) $(LIST_INSTALLED_PACKAGES)
	$(QUIET) $(NODE) $(LIST_INSTALLED_PACKAGES) $(LIST_INSTALLED_PACKAGES_FLAGS) $(ROOT_DIR)

.PHONY: list-pkgs-installed
