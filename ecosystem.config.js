module.exports = {
  apps: [
    {
      name: 'metaverse-website',
      script: 'npm',
      args: 'run dev',
      watch: true,
      ignore_watch: ['node_modules'],
      instances: 1,
      autorestart: true,
      exec_mode: 'fork',
      max_memory_restart: '1G',
    },
  ],
};
