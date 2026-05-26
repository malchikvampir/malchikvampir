module.exports = {
    apps: [
        {
            name: "malchikvampir",

            script: "npm",
            args: "start",

            cwd: "/var/www/malchikvampir",

            instances: 1,
            exec_mode: "fork",

            autorestart: true,
            watch: false,

            max_memory_restart: "1G",

            env: {
                NODE_ENV: "production",
                PORT: 3000,
            },
        },
    ],
};