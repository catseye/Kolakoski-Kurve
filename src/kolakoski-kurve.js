KolakoskiKurve = function() {
    this.init = function(config) {
        this.canvas = config.canvas;
        this.ctx = this.canvas.getContext('2d');

        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "black";
        this.ctx.globalCompositeOperation = 'source-over';
        this.dist = 5;

        this.startIndex = 0;
        this.endIndex = 10000;
        this.stepSize = 10;
        this.reset();
    };

    this.reset = function() {
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.x = this.canvas.width / 2;
        this.y = this.canvas.height - 10;
        this.y = this.canvas.height / 2;
        this.theta = 0;

        this.index = this.startIndex;

        this.generate(this.endIndex);  // sets this.sequence and this.genIndex

        if (this.intervalID) {
            clearTimeout(this.intervalID);
        }
        var $this = this;
        var stepFunction = function() {
            $this.step();
            setTimeout(stepFunction, 0);
        }
        this.intervalID = setTimeout(stepFunction, 0);
    };

    this.step = function() {
        if (this.index >= this.endIndex) return;

        var num = this.sequence[this.index];

        if (num === 1) {
            // FD 10
            var rad = (this.theta / 360) * (Math.PI * 2);

            var dx = this.dist * Math.cos(rad);
            var dy = this.dist * Math.sin(rad);

            var newX = this.x + dx;
            var newY = this.y + dy;

            this.ctx.beginPath();
            this.ctx.moveTo(this.x, this.y);
            this.ctx.lineTo(newX, newY);
            this.ctx.stroke();

            this.x = newX;
            this.y = newY;
        } else if (num === 2) {
            // RT 90
            this.theta += 90;
            while (this.theta >= 360) this.theta -= 360;
        } else {
            alert('wtf');
        }
        
        this.index++;
    };

    this.draw = function() {
        if (this.index >= this.endIndex) {
            if (this.intervalID) {
                clearTimeout(this.intervalID);
            }
            return;
        }

        for (var j = 0; j < this.stepSize; j++) {
            this.step();
        }
    };

    this.update = function() {
    };

    /*
     * Generate at least n values of the Kolakoski sequence, starting at where-ever we
     * last left off (or the beginning, if we were never called before.)
     */
    this.generate = function(n) {
        if (this.sequence === undefined || this.sequence === null || this.sequence.length < 3) {
            this.sequence = [1, 2, 2];
        }
        if (this.genIndex === undefined || this.genIndex === null) {
            this.genIndex = 3;
        }
        for (; this.sequence.length < n; this.genIndex++) {
            var newValue = this.genIndex % 2 === 1 ? 1 : 2;
            this.sequence.push(newValue);
            if (this.sequence[this.genIndex - 1] === 2) {
                this.sequence.push(newValue);
            }
        }
    };

    this.setStyle = function(style) {
        this.style = style;
        if (!this.ctx) return;
        if (style === 'opaque') {
            this.ctx.globalCompositeOperation = "source-over";
            this.ctx.strokeStyle = "black";
        } else if (style === 'translucent') {
            this.ctx.globalCompositeOperation = "source-over";
            this.ctx.strokeStyle = "rgba(0,0,0,0.1)";
        } else if (style === 'xor') {
            this.ctx.strokeStyle = "black";
            this.ctx.globalCompositeOperation = "xor";
        } else {
            alert(style + '?');
        }
        this.reset();
    };
};
