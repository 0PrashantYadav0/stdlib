
# TARGETS #

# Run Julia benchmarks.
#
# This target runs a list of Julia benchmarks in sequential order. Note that we assume the benchmarks can be run using Julia.

benchmark-julia:
	$(QUIET) set -o pipefail ; $(FIND_JULIA_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		$(MAKE_EXECUTABLE) $$file && $$file || exit 1; \
	done

.PHONY: benchmark-julia


# Run Julia benchmarks.
#
# This target runs a specified list of Julia benchmarks in sequential order. Note that we assume the benchmarks can be run using Julia.

benchmark-julia-files:
	$(QUIET) for file in $(FILES); do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		$(MAKE_EXECUTABLE) $$file && $$file || exit 1; \
	done

.PHONY: benchmark-julia-files
