FROM oven/bun:1.1.0
COPY "." "/app"
WORKDIR "/app"
RUN bun install
RUN bun run build
EXPOSE 3000
CMD ["bun", "start"]