
# VARIABLES #

# Define the [Codecov][1] executable.
#
# [1]: https://github.com/codecov/codecov-bash
# [2]: https://github.com/codecov/codecov-python
ifeq ($(OS), WINNT)
	CODECOV ?= pip install --user codecov && codecov
else
	CODECOV ?= bash <(curl -s https://codecov.io/bash)
endif

# Define the command-line options to be used when reporting coverage statistics:
CODECOV_FLAGS ?= \
	-f "$(LCOV_INFO)" \
	-F $(CI_SERVICE) \
	-F $(shell echo $(OS) | tr '[:upper:]' '[:lower:]') \
	-F $(shell (command -v $(NODE) >/dev/null 2>&1 && $(NODE) --version || echo '') | tr '\.' '_' | (printf 'node_' && $(CAT))) \
	-X fix \
	-Z

ifdef COVERAGE_NAME
	CODECOV_FLAGS := $(CODECOV_FLAGS) -F $(COVERAGE_NAME)
endif


# TARGETS #

# Report coverage statistics.
#
# This target sends coverage statistics to [Codecov][1].
#
# [1]: https://codecov.io/

coverage-codecov:
	$(QUIET) $(CODECOV) $(CODECOV_FLAGS) || echo 'Failed to upload coverage reports to Codecov.'

.PHONY: coverage-codecov


